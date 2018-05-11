/**
 * The logged in user
 */
export interface User{
  /**
   * User ID used to indicate user when making calls to
   * the server
   */
  id: number;
  /**
   * User's first name
   */
  firstName: string;
  /**
   * User's last name
   */
  lastName: string;
  /**
   * User e-mail; also used for logging in
   */
  email: string;
  /**
   * Role to indicate what areas of the app are accesible to the user;
   * 0 = student, 1 = instr, 2 = admin
   */
  role: number;
}

/**
 * base user class which is extended by other interfaces
 * and rarely used on its own
 */
export interface _User{
  /**
   * User ID used to index users
   */
  userId: number;
  /**
   * User first name; mainly used for display
   */
  firstName: string;
  /**
   * User last name; mainly used for display
   */
  lastName: string;
}
