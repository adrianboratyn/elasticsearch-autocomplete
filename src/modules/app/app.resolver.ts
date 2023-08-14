import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
    @Query(() => String)
    initQuery(): string {
        return 'Hello World!'
    }
}
