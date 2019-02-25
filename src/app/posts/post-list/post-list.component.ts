import { Component , Input} from '@angular/core';

import { Post } from '../post.model';
@Component({
selector: 'app-post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']

})
export class  PostListComponent{

  // posts = [
  //  {title: 'First Post', content: 'this is the first post content'},
  //  {title: 'First Second', content: 'this is the second post content'},
  //   {title: 'First Third', content: 'this is the third post content'},


  // ];

        @Input() posts: Post [] = [];

}
