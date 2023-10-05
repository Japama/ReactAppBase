import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Asumiendo que tienes una función `useAuth` para obtener el contexto de autenticación

interface SignInData {
    username: string;
    pwd: string;
}

export default function SignInSide() {
    const { login } = useAuth(); // Obtén la función de inicio de sesión del contexto de autenticación
    const [formData, setFormData] = useState<SignInData>({
        username: '',
        pwd: '',
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        try {
            const response = await login(formData); // Llama a la función de inicio de sesión del contexto
      
            // Realiza cualquier lógica adicional después del inicio de sesión exitoso
          } catch (error) {
            // Lógica para manejar errores
          }
    };

    return (
        <div className="flex items-center justify-center bg-gray-50 min-h-screen">
            <div className="max-w-md w-full space-y-8 p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Sign in</h1>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="username"
                                name="username"
                                type="username"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                  border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="User"
                                onChange={handleChange} 
                            />
                        </div>
                        <div>
                            <input
                                id="pwd"
                                name="pwd"
                                type="pwd"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                  border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={handleChange} 
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 
                font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
