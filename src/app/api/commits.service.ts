import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Commit} from './commit';

/*

  Example of an Angular Singleton Service:

  The counterpart example is in the commits.api.ts, which uses fetch and is Angular independent.

  Depending on the type of the API we have to decide how much mapping and encapsulation code we want to write in here.
  If the API is a owned by the frontend application we can keep this layer thin. 
  If the API is not designed especially for the frontend mapping can occur in this layer to turn the data
  into relevant models for the business need of the frontend application.

  The Github-API is not designed for building our frontend, so we map it here and encapsulate this logic here.

*/

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  constructor(private http: HttpClient) {}

  readCommitsByUsername(username: string): Promise<Commit[]> {
    return this.http.get(`https://api.github.com/users/${username}/events`)
      .pipe(map(toCommits))
      .toPromise();
  }

  readCommitsByUsername$(username: string): Observable<Commit[]> {
    return this.http.get(`https://api.github.com/users/${username}/events`)
      .pipe(map(toCommits));
  }
}

function toCommits(response: any[]) {
  const isPushEvent = (entry) => entry.type === 'PushEvent';

  return response
    .filter(isPushEvent)
    .reduce((commits, pushEvent) =>
      commits.concat(pushEvent.payload.commits.map(commit => // flatten commits
        new Commit(commit.sha,
            pushEvent.repo.name,
            commit.author.name,
            pushEvent.created_at,
            commit.message))
        )
    , []);
}