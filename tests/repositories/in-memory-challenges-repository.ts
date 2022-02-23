import { ChallengeRepository } from "../../src/application/repositories/ChallengeRepository"
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengeRepository {
    public items: Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
        const challenge =  this.items.find(Challenge => Challenge.id == id)

        if (!challenge) {
            return null;
        }

        return challenge
    }
}