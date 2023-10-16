class PermissionPage{

constructor(driver) {
    this.driver = driver;
    }

    get notificationPermissionBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.Button');
    }

    get microphonePermissionBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.Button');
    }

    get contactAccessBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.Button');
    }

    get audioRecordPermissionBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
    }

    get accessContactsPermissionBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
    }

    get geolocationPermissionBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
    }

    get phoneCallsPermissionBtn() {
        return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
    }

    async grantNotificationPermission() {
        await this.notificationPermissionBtn.click();
    }

    async grantMicrophonePermission() {
        await this.microphonePermissionBtn.click();
    }

    async grantContactAccess() {
        await this.contactAccessBtn.click();
    }

    async grantAudioRecordPermission() {
        await this.audioRecordPermissionBtn.click();
    }

    async grantAccessContactsPermission() {
        await this.accessContactsPermissionBtn.click();
    }

    async grantGeolocationPermission() {
        await this.geolocationPermissionBtn.click();
    }

    async grantPhoneCallsPermission() {
        await this.phoneCallsPermissionBtn.click();
    }

    async grantAllPermissions() {
        await this.grantNotificationPermission();
        await this.grantMicrophonePermission();
        await this.grantContactAccess();
        await this.grantAudioRecordPermission();
        await this.grantAccessContactsPermission();
        await this.grantGeolocationPermission();
        await this.grantPhoneCallsPermission();
    }
}

module.exports = PermissionPage;
