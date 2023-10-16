class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }


    // Locators
    get emailInput() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.EditText');
    }

    get passwordInput() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View[3]/android.widget.EditText');
    }

    get signInButton() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Button');
    }

    // Actions
    async enterEmail(email) {
        await this.emailInput.setValue(email);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async tapSignIn() {
        await this.signInButton.click();
    }


    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.tapSignIn();
    }
    get errorMessage() {
        return this.driver.$('//android.widget.TextView[@text="Login failed. 4 attempts remaining"]')
    }
     async getErrorMessage() {
        return this.errorMessage.getText();

    } get invalidEmailFormatErrorMessage() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View[1]')
    }
     async getInvalidEmailFormatErrorMessage() {
        return this.invalidEmailFormatErrorMessage.getText();

    }
}

module.exports = LoginPage



