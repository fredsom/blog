import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor() {}

  ngOnInit() {}

  onLove(): void {
    this.post.loveIts++;
    console.log('LoveIts ++ = ' + this.post.loveIts);
  }

  onHate(): void {
    this.post.loveIts--;
    console.log('LoveIts -- = ' + this.post.loveIts);
  }
}
