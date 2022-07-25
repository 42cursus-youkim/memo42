export class Note {
  constructor(
    public readonly id: number,
    public title: string = 'Untitled Note',
    public content: string = '', // public lastModified: number = Date.now(),
  ) {}

  public static fromJSON(json: any): Note {
    return new Note(json.id, json.title, json.content)
  }
}
