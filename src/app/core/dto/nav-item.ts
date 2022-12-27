export class NavItemDto {
  displayName: string;
  icon: string;
  router: string;
  role: string;
  children!: NavItemDto[];

  constructor(
    displayName: string,
    icon: string,
    role: string,

    router: string,

    children?: NavItemDto[]
  ) {
    this.displayName = displayName;
    this.icon = icon;
    this.role = role;
    this.router = router;
    this.children = children ? children : [];
  }
}
