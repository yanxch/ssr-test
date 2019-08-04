import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CommitsService} from '../api/commits.service';
import {Commit} from '../api/commit';

@Component({
  selector: 'commits-view',
  template: `
    <h2>Commits View</h2>
    <h2>{{username}}</h2>
    <div *ngFor="let commit of commits">
      {{commit.message}}
    </div>
  `,
})
export class CommitsView implements OnInit, OnDestroy {

  username: string;
  commits: Commit[];

  private subscription: Subscription;


  constructor(private route: ActivatedRoute,
              private commitsService: CommitsService) {
    this.subscription = this.route.paramMap
      .subscribe(paramMap => {
        console.log('NEW Username', paramMap);

        this.username = paramMap.get('username');

        this.commitsService.readCommitsByUsername(this.username)
          .then((commits) => {
            this.commits = commits;
          });

      });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
