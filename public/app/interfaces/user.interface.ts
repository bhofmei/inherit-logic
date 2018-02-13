/**
 * The logged in user
 */
export interface User{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
}

/**
 * base user class which is extended by other interfaces
 * and rarely used on its own
 */
export interface _User{
  userId: number;
  firstName: string;
  lastName: string;
}
