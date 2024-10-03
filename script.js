const input = document.querySelector('input')
        const button = document.querySelector('button')

        let alfaCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let alfaSmall = "abcdefghijklmnopqrstuvwxyz"
        let num = '1234567890'
        let other = ['@', '#', '$', '&', '!'];

        let randCapital;
        let randSmall;
        let randOther;
        let randNum;

        let resultStr = '';

        button.addEventListener('click', function () {

            resultStr = ''
            // First capital letter
            randCapital = Math.floor(Math.random() * 26);
            resultStr += (alfaCapital[randCapital])
            //7 small letters
            for (let i = 0; i < 7; i++) {
                randSmall = Math.floor(Math.random() * 26)
                resultStr += (alfaSmall[randSmall])
            }
            // Other marks
            randOther = Math.floor(Math.random() * 4);
            resultStr += other[randOther]

            for (let i = 0; i <= 3; i++) {
                randNum = Math.floor(Math.random() * 10);
                resultStr += num[randNum]
            }
            // outPut
            input.value = resultStr;
        })