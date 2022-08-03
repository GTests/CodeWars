/*
DESCRIPTION:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

public class regexValidatePinCode {
    public static boolean validatePin(String pin) {
        String numbers = "0123456789";
        int length = pin.length();
        String[] charArr = pin.split("");
        boolean result = true;
        if (length < 4 || length > 6 || length == 5) {
            result = false;
        } else {
            for (String digit : charArr) {
                if (!numbers.contains(digit)) {
                    result = false;
                }
            }
        }
        return result;
    }
}