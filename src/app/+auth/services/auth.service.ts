import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  authStatus: Subject<boolean>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.authStatus = new Subject<boolean>();
    this.user = this.firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          console.log('Auth Found');
          this.userDetails = user;
          this.authStatus.next(true);
        }
        else {
          this.userDetails = null;
          this.authStatus.next(false);
          console.log('No Auth');
        }
      }
    );
  }

  /**
   * Validate current user
   * @author chollenbeck
   */
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  getCurrentUser() {
    return this.userDetails;
  }

  /**
   * Log out, then return to next route or home as default
   * @author chollenbeck
   */
  logout() {
    localStorage.clear();
    return this.firebaseAuth.auth.signOut();
  }

  register(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, pass);
  }

  login(email: string, pass: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  triggerResetPassword(email: string): Promise<void> {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  confirmEmail(code): Promise<void> {
    return this.firebaseAuth.auth.applyActionCode(code);
  }

  resetPassword(code, newPassword): Promise<void> {
    return this.firebaseAuth.auth.confirmPasswordReset(code, newPassword);
  }
}
