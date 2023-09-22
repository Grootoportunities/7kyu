function validatePIN (pin) {
  
    if (pin.length != 4 && pin.length != 6) 
      return false;
    
    else if (pin.indexOf('[a-z]'))
      return false;
    
    return true;
  }