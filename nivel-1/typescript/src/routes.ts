import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
      const user = createUser({
            name: 'twobanks',
            email: 'twobanks@me.com',
            password: '123456',
            techs: [
                  'NodeJS', 'ReactJS', 'React Native',
                  {
                        title: 'Javascript', experience: 100
                  },
            ],
      });

      return response.json({ message: 'Hello mundão!' });
}