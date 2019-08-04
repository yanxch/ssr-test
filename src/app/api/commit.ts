// this class is driven by the Backend-API 
// whe should be aware of that
// 
// it is a class because we want to place logic inside of it
// 
export class Commit {

  constructor(public id: number,
              public repo: string,
              public createdBy: string,
              public createdAt: Date,
              public message: string) {

  }
}
