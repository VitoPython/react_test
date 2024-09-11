/**
 * Компонент LoginPage відповідає за відображення сторінки входу користувача.
 * Включає компонент LoginForm, що надає інтерфейс для автентифікації.
 */
import React from 'react';
import { LoginForm } from '../features/auth/LoginForm'; // Імпорт компонента форми входу

/**
 * Сторінка входу в систему.
 * Відображає заголовок і компонент LoginForm для входу користувача.
 */
export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Вхід до системи</h1>
      <LoginForm />
    </div>
  );
};