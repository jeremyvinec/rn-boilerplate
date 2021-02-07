export class FooConfig {
  constructor(
    readonly name: string,
    readonly title: string,
    readonly type?: string,
  ) {}

  static Example(): FooConfig {
    return new FooConfig(
      'name',
      'title',
      'type',
    );
  }

}
