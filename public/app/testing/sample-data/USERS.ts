import { User, AdminStudent } from '../../interfaces';

export const sampleAdmin: User = {
  id: 1,
  firstName: 'Admin',
  lastName: 'Tester',
  email: 'admin@test.com',
  role: 2 // admin
}

export const sampleInstr: AdminStudent = {
  userId: 2,
  firstName: 'Instr',
  lastName: 'Tester',
  email: 'instr@test.com',
  role: 'instr',
  course: null
}
