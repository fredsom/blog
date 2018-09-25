import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input()
  postList: Post[];
  posts = POSTS;
  nPosts = 0;

  constructor() {}

  ngOnInit() {
    if (this.posts) {
      this.nPosts = this.posts.length;
    }
  }

}
