/* 
      Para criar: name, email, password
*/
interface TechObject {
      title: string;
      experience: number;
}

interface CreateUserData {
      name?: string; // o ? signifca OPCIONAL
      email: string;
      password: string;
      techs: Array<string | TechObject> // Caso seja um array de strings e objeto
      // techs: string[]; Caso seja um array apenas de string
}

export default function createUser({ name, email, password }: CreateUserData) {
      const user = {
            name,
            email,
            password,
      }
      return user;
}