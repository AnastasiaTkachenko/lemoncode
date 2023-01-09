export const dayValidator = ({ value }) => {
  const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;

  return { succeeded, message: succeeded ? '' : 'Introduce la fecha correcta'};
};

export const monthValidator = ({ value }) => {
   const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;
 
   return { succeeded, message: succeeded ? '' : 'Introduce el mes correcto'};
 };

 export const yearValidator = ({ value }) => {
  const succeeded = parseInt(value) >= 0 && parseInt(value) <= 2025;

  return { succeeded, message: succeeded ? '' : 'Introduce el año correcto'};
};

