import { Entity } from "@/domain/entities/entity"
import { UniqueEntityID } from "@/domain/entities/unique-entity-id"
import { Optional } from "@/domain/types/optional"
 
interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps> {
  get content() {
    return this.props.content
  }

  static create(
    props: Optional<AnswerProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const answer = new Answer({
      ...props,
      createdAt: new Date(),
    }, id)

    return answer
  }
}