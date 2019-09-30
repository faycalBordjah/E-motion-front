export class AppConstants {

  public static get baseRestUrl(): string {
    return '/e-motion/rest/';
  }

  public static get assetLogoPath(): string {
    return 'assets/img/logo_emotion.jpg';
  }

  public static get appTitle(): string {
    return 'e-Motion spécialiste de location de voitures électriques';
  }

  public static get apiUrl(): string {
    return 'http://localhost:8080/emotion/api';
  }

  public static get api_User_Url(): string {
    return 'http://localhost:8080/emotion/api/user';
  }

}
