export class Header {
  id?: string;
  name?: string = 'name';
  goalLife?: string = 'goal';
  photoURL?: string = 'photo';
  email?: string = 'email@domain.com';
  phoneNumber?: string = '999-999-999';
  location?: string = 'city, country';

  // Definimos el Map con la propiedad específica de GitHub
  socialNetwork?: {
    github?: string;
  } = {
    github: '@github' // Valor por defecto
  };
}
