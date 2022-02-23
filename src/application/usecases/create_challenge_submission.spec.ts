import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create_challenge_submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const StudentRepository = new InMemoryStudentsRepository();
        const ChallengeRepository = new InMemoryChallengesRepository

        const student = Student.create({
            name: 'Vítor',
            email: 'example@example.com'
        })

        const challenge = Challenge.create({
            title: 'Challenge 1',
            instructionsUrl: 'http://example.com'
        })
        
        StudentRepository.items.push(student);
        ChallengeRepository.items.push(challenge);

        const sut = new CreateChallengeSubmission(
            StudentRepository,
            ChallengeRepository,
        );

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
        })

        expect(response). toBeTruthy()
    }); 
});