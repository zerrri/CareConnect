// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation
export const isValidPassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Phone number validation
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Date validation
export const isValidDate = (date: string): boolean => {
  const inputDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return inputDate >= today;
};

// Time validation
export const isValidTime = (time: string): boolean => {
  const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
};

// Required field validation
export const isRequired = (value: any): boolean => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== null && value !== undefined;
};

// Form validation helper
export const validateForm = (data: Record<string, any>, rules: Record<string, any>): Record<string, string[]> => {
  const errors: Record<string, string[]> = {};
  
  Object.keys(rules).forEach(field => {
    const fieldErrors: string[] = [];
    const value = data[field];
    const fieldRules = rules[field];
    
    // Required validation
    if (fieldRules.required && !isRequired(value)) {
      fieldErrors.push(`${field} is required`);
    }
    
    // Email validation
    if (fieldRules.email && value && !isValidEmail(value)) {
      fieldErrors.push('Invalid email format');
    }
    
    // Password validation
    if (fieldRules.password && value) {
      const passwordValidation = isValidPassword(value);
      if (!passwordValidation.isValid) {
        fieldErrors.push(...passwordValidation.errors);
      }
    }
    
    // Phone validation
    if (fieldRules.phone && value && !isValidPhone(value)) {
      fieldErrors.push('Invalid phone number format');
    }
    
    // Date validation
    if (fieldRules.date && value && !isValidDate(value)) {
      fieldErrors.push('Date must be today or in the future');
    }
    
    // Time validation
    if (fieldRules.time && value && !isValidTime(value)) {
      fieldErrors.push('Invalid time format');
    }
    
    // Min length validation
    if (fieldRules.minLength && value && value.length < fieldRules.minLength) {
      fieldErrors.push(`${field} must be at least ${fieldRules.minLength} characters long`);
    }
    
    // Max length validation
    if (fieldRules.maxLength && value && value.length > fieldRules.maxLength) {
      fieldErrors.push(`${field} must be no more than ${fieldRules.maxLength} characters long`);
    }
    
    // Custom validation
    if (fieldRules.custom && typeof fieldRules.custom === 'function') {
      const customError = fieldRules.custom(value, data);
      if (customError) {
        fieldErrors.push(customError);
      }
    }
    
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  });
  
  return errors;
};

// Format validation error messages
export const formatValidationErrors = (errors: Record<string, string[]>): string[] => {
  return Object.values(errors).flat();
};
