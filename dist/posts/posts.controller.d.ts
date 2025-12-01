import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './post.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(page?: number, limit?: number, search?: string, searchField?: string, sortBy?: string, sortOrder?: 'ASC' | 'DESC'): Promise<Pagination<Post>>;
    findOne(id: string): Promise<Post | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: string): Promise<Post>;
}
