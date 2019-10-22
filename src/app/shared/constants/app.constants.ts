export class AppConstants {

    public static baseUrl = 'http://localhost:8080/emotion/api';

    public static get asset_logo_path(): string {
        return 'assets/img/logo_emotion.jpg';
    }

    // Pas besoin de cette variable.
    /*
    public static get appTitle(): string {
      return 'e-Motion voyager sans polluer';
    }*/

    public static get api_authentication_url(): string {
        return this.baseUrl + '/authenticate';
    }

    public static get api_user_url(): string {
        return this.baseUrl + '/users';
    }

    public static get api_vehicle_url(): string {
        return this.baseUrl + '/vehicles';
    }

    public static get api_admin_vehicule(): string {
      return this.baseUrl + '/admin/vehicles';
    }

    public static get api_admin_users(): string {
      return this.baseUrl + '/admin/users';
    }

    public static get api_location_url(): string {
        return this.baseUrl + '/locations';
    }

    public static get jwt_token(): string {
      return 'JWT_TOKEN';
    }
}
