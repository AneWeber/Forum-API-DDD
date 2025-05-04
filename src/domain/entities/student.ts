import { Entity } from "@/domain/entities/entity"
 
interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
}