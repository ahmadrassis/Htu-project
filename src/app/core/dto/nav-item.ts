export class NavItemDto {
  displayName: string;
  icon: string;
  router: string;
  roll: string;
  children!: NavItemDto[];

  constructor(
    displayName: string,
    icon: string,
    roll: string,

    router: string,

    children?: NavItemDto[]
  ) {
    this.displayName = displayName;
    this.icon = icon;
    this.roll = roll;
    this.router = router;
    this.children = children ? children : [];
  }
}
