import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { flatMap, map, takeUntil, tap } from 'rxjs/operators';
import { Commit } from '../api/commit';
import { CommitsService } from '../api/commits.service';

@Component({
  selector: 'commits-view',
  templateUrl: './commits.view.html',
  styleUrls: ['./commits.view.scss']
})
export class CommitsView implements OnInit, OnDestroy {

  private onDestroy$ = new Subject();

  username: string;
  commits: Commit[];

  commits$ = null;

  constructor(
    private route: ActivatedRoute,
    private commitsService: CommitsService) { }

  ngOnInit() {
    this.commits$ = this.route.paramMap.pipe(
      map(params => params.get('username')),
      flatMap(username => this.commitsService.readCommitsByUsername$(username)),
      tap(console.log),
      takeUntil(this.onDestroy$)
    );
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }
}
