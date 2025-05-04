import { Entity } from "@/domain/entities/entity"
import { UniqueEntityID } from "@/domain/entities/unique-entity-id"
 
interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(
    props: StudentProps,
    id?: UniqueEntityID,
  ) {
    const student = new Student(props, id)

    return student
  }
}