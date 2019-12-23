import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription, Subject} from 'rxjs';
import {CommitsService} from '../api/commits.service';
import {Commit} from '../api/commit';
import {map, exhaustMap, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'commits-view',
  templateUrl: './commits.view.html',
  styleUrls: ['./commits.view.scss']
})
export class CommitsView implements OnInit, OnDestroy {

  private onDestroy$ = new Subject();

  username: string;
  commits: Commit[];

  commits$ =    this.route.paramMap.pipe(
    map(params => params.get('username')),
    exhaustMap(username => this.commitsService.readCommitsByUsername(username)),
    takeUntil(this.onDestroy$)
  );

  constructor(private route: ActivatedRoute,
              private commitsService: CommitsService) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
