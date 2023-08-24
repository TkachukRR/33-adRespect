export function getFooterMarkup(data) {
  const sectionData = data.footer;

  return `
        <div class="max-w-[1040px] mx-auto" id="#${sectionData.id}">
            <div class="flex justify-between items-center pb-[62px] mb-[62px] border-b border-grey">
                <svg width="115" height="20" viewBox="0 0 115 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.62 19.5C3.36667 19.5 2.28 19.28 1.36 18.84C0.453333 18.4133 0 17.7533 0 16.86C0 16.3267 0.22 15.8533 0.66 15.44C1.11333 15.0267 1.68667 14.6867 2.38 14.42C3.07333 14.14 3.86 13.8933 4.74 13.68C4.91333 13.6267 5.05333 13.5933 5.16 13.58L5.54 13.98C4.95333 14.1667 4.47333 14.36 4.1 14.56C3.72667 14.76 3.44 14.9867 3.24 15.24C3.04 15.48 2.94 15.7467 2.94 16.04C2.94 16.4533 3.12667 16.74 3.5 16.9C3.88667 17.0733 4.39333 17.16 5.02 17.16C5.62 17.16 6.19333 17.0933 6.74 16.96C7.3 16.8267 7.76 16.6333 8.12 16.38C8.48 16.1267 8.66 15.8267 8.66 15.48C8.66 15.2533 8.56 15.0733 8.36 14.94C8.16 14.8067 7.88 14.74 7.52 14.74C7.2 14.74 6.87333 14.7733 6.54 14.84C6.20667 14.8933 5.79333 14.98 5.3 15.1C4.87333 15.22 4.50667 15.3067 4.2 15.36C3.89333 15.4267 3.60667 15.46 3.34 15.46C2.79333 15.46 2.28667 15.3667 1.82 15.18C1.36667 14.98 1 14.7133 0.72 14.38C0.453333 14.0333 0.32 13.64 0.32 13.2C0.32 12.5867 0.626667 12.0533 1.24 11.6C1.86667 11.1333 2.72667 10.7267 3.82 10.38L4.48 10.96C4.30667 11.0133 4.14667 11.0667 4 11.12C3.65333 11.24 3.39333 11.3733 3.22 11.52C3.04667 11.6667 2.96 11.8667 2.96 12.12C2.96 12.3333 3.04667 12.4933 3.22 12.6C3.40667 12.7067 3.64 12.76 3.92 12.76C4.22667 12.76 4.54667 12.74 4.88 12.7C5.21333 12.6467 5.56 12.58 5.92 12.5C6.49333 12.3933 6.99333 12.3133 7.42 12.26C7.84667 12.2067 8.31333 12.18 8.82 12.18C9.71333 12.18 10.4533 12.3933 11.04 12.82C11.64 13.2467 11.94 13.9 11.94 14.78C11.94 15.7933 11.56 16.6533 10.8 17.36C10.0533 18.08 9.11333 18.6133 7.98 18.96C6.84667 19.32 5.72667 19.5 4.62 19.5ZM5.46 11.8C4.51333 11.8 3.67333 11.64 2.94 11.32C2.22 10.9867 1.65333 10.5267 1.24 9.94C0.84 9.35333 0.64 8.69333 0.64 7.96C0.64 7.24 0.84 6.59333 1.24 6.02C1.65333 5.43333 2.22667 4.98 2.96 4.66C3.69333 4.32667 4.52667 4.16 5.46 4.16C6.03333 4.16 6.49333 4.20667 6.84 4.3C7.2 4.39333 7.58667 4.52 8 4.68C8.16 4.74667 8.30667 4.80667 8.44 4.86C8.58667 4.9 8.72667 4.92 8.86 4.92C9.20667 4.92 9.45333 4.8 9.6 4.56C9.74667 4.32 9.82 4.00667 9.82 3.62L12.34 4.42C12.3267 4.92667 12.12 5.32 11.72 5.6C11.3333 5.86667 10.82 6 10.18 6C10.02 5.98667 9.84 5.97333 9.64 5.96C10.0667 6.54667 10.28 7.21333 10.28 7.96C10.28 8.69333 10.0733 9.35333 9.66 9.94C9.26 10.5267 8.69333 10.9867 7.96 11.32C7.22667 11.64 6.39333 11.8 5.46 11.8ZM5.46 9.84C5.79333 9.84 6.08667 9.76 6.34 9.6C6.59333 9.44 6.78667 9.22 6.92 8.94C7.05333 8.64667 7.12 8.32 7.12 7.96C7.12 7.42667 6.96667 6.98667 6.66 6.64C6.36667 6.29333 5.96667 6.12 5.46 6.12C5.12667 6.12 4.83333 6.2 4.58 6.36C4.32667 6.52 4.12667 6.74 3.98 7.02C3.84667 7.3 3.78 7.61333 3.78 7.96C3.78 8.50667 3.93333 8.96 4.24 9.32C4.56 9.66667 4.96667 9.84 5.46 9.84Z" fill="#F5F0EC"/>
                    <path d="M13.0628 4.44H16.2228V12.72C16.2228 13.6667 16.2695 14.5333 16.3628 15.32H13.0628V4.44ZM13.0228 0.5H16.2428V3.28H13.0228V0.5Z" fill="#F5F0EC"/>
                    <path d="M27.6828 15.6C26.8295 15.6 26.1628 15.3533 25.6828 14.86C25.2028 14.3667 24.9628 13.6467 24.9628 12.7V8.38C24.9628 7.74 24.8095 7.26 24.5028 6.94C24.2095 6.60667 23.7561 6.44 23.1428 6.44C22.5028 6.44 21.8828 6.62667 21.2828 7C20.6828 7.37333 20.1628 7.92 19.7228 8.64L17.5628 6.96C18.3228 6.04 19.2028 5.34667 20.2028 4.88C21.2161 4.4 22.3095 4.16 23.4828 4.16C24.5761 4.16 25.4628 4.33333 26.1428 4.68C26.8228 5.01333 27.3228 5.49333 27.6428 6.12C27.9628 6.73333 28.1228 7.46 28.1228 8.3V12.8C28.1228 12.8133 28.1228 12.8267 28.1228 12.84C28.1228 12.84 28.1228 12.8467 28.1228 12.86C28.1361 13.0867 28.1895 13.2533 28.2828 13.36C28.3761 13.4667 28.5095 13.52 28.6828 13.52C28.8295 13.52 28.9695 13.5133 29.1028 13.5C29.2495 13.4733 29.4028 13.4333 29.5628 13.38L29.1628 15.32C28.9361 15.4133 28.6961 15.48 28.4428 15.52C28.1895 15.5733 27.9361 15.6 27.6828 15.6ZM21.1628 15.6C20.0695 15.6 19.2028 15.32 18.5628 14.76C17.9361 14.1867 17.6228 13.4533 17.6228 12.56C17.6228 11.7733 17.9161 11.0733 18.5028 10.46C19.0895 9.83333 19.9628 9.32667 21.1228 8.94C22.2828 8.55333 23.7095 8.29333 25.4028 8.16V10.16C24.3761 10.2533 23.5295 10.3867 22.8628 10.56C22.2095 10.7333 21.7161 10.9533 21.3828 11.22C21.0628 11.4733 20.9028 11.78 20.9028 12.14C20.9028 12.4333 21.0095 12.6733 21.2228 12.86C21.4495 13.0333 21.7561 13.12 22.1428 13.12C22.6628 13.12 23.1361 13.0067 23.5628 12.78C23.9895 12.5533 24.3295 12.2333 24.5828 11.82C24.8361 11.4067 24.9628 10.92 24.9628 10.36L25.5828 10.54C25.5828 11.3933 25.4295 12.2067 25.1228 12.98C24.8161 13.74 24.3295 14.3667 23.6628 14.86C23.0095 15.3533 22.1761 15.6 21.1628 15.6Z" fill="#F5F0EC"/>
                    <path d="M30.4261 4.44H33.6061V7.04C34.0328 6.12 34.5394 5.41333 35.1261 4.92C35.7128 4.41333 36.3194 4.16 36.9461 4.16C37.3194 4.16 37.6528 4.22 37.9461 4.34C38.2394 4.44667 38.5328 4.6 38.8261 4.8L37.5461 7.58C37.2661 7.39333 37.0128 7.26 36.7861 7.18C36.5594 7.08667 36.2994 7.04 36.0061 7.04C35.5794 7.04 35.1861 7.16667 34.8261 7.42C34.4661 7.66 34.1728 8.02667 33.9461 8.52C33.7194 9.01333 33.6061 9.60667 33.6061 10.3V12.72C33.6061 13.6667 33.6528 14.5333 33.7461 15.32H30.4261V4.44Z" fill="#F5F0EC"/>
                    <path d="M43.6012 15.6C42.5612 15.6 41.6546 15.3667 40.8812 14.9C40.1079 14.42 39.5079 13.7533 39.0812 12.9C38.6679 12.0333 38.4613 11.0267 38.4613 9.88C38.4613 8.73333 38.6679 7.73333 39.0812 6.88C39.5079 6.01333 40.1079 5.34667 40.8812 4.88C41.6546 4.4 42.5612 4.16 43.6012 4.16C44.3346 4.16 45.0213 4.34667 45.6613 4.72C46.3013 5.09333 46.8212 5.60667 47.2212 6.26V1.02H50V12.72C50 13.6667 50.0533 14.5333 50.16 15.32H47.2212V13.42C46.8346 14.1 46.3212 14.6333 45.6812 15.02C45.0546 15.4067 44.3612 15.6 43.6012 15.6ZM41.8013 9.88C41.8013 10.5333 41.9146 11.1133 42.1413 11.62C42.3679 12.1133 42.6812 12.5 43.0812 12.78C43.4813 13.0467 43.9546 13.18 44.5013 13.18C44.9946 13.18 45.4479 13.04 45.8612 12.76C46.2746 12.48 46.6012 12.1133 46.8412 11.66C47.0946 11.1933 47.2212 10.7 47.2212 10.18V9.58C47.2212 9.03333 47.0946 8.53333 46.8412 8.08C46.5879 7.62667 46.2479 7.26667 45.8213 7C45.4079 6.72 44.9679 6.58 44.5013 6.58C43.9546 6.58 43.4813 6.72 43.0812 7C42.6812 7.26667 42.3679 7.65333 42.1413 8.16C41.9146 8.65333 41.8013 9.22667 41.8013 9.88Z" fill="#F5F0EC"/>
                    <path d="M57.0434 15.6C56.0301 15.6 55.1301 15.36 54.3434 14.88C53.5568 14.4 52.9434 13.7267 52.5034 12.86C52.0768 11.9933 51.8634 11 51.8634 9.88C51.8634 8.76 52.0768 7.76667 52.5034 6.9C52.9434 6.03333 53.5568 5.36 54.3434 4.88C55.1301 4.4 56.0301 4.16 57.0434 4.16C57.9101 4.16 58.6968 4.39333 59.4034 4.86C60.1234 5.31333 60.6768 5.93333 61.0634 6.72V1.02H62.8834V12.72C62.8834 13.68 62.9168 14.5467 62.9834 15.32H61.0634V13.02C60.6901 13.8067 60.1434 14.4333 59.4234 14.9C58.7168 15.3667 57.9234 15.6 57.0434 15.6ZM53.8234 9.88C53.8234 10.7067 53.9768 11.4467 54.2834 12.1C54.5901 12.74 55.0168 13.24 55.5634 13.6C56.1101 13.96 56.7368 14.14 57.4434 14.14C58.1101 14.14 58.7168 13.9667 59.2634 13.62C59.8234 13.2733 60.2634 12.82 60.5834 12.26C60.9034 11.6867 61.0634 11.06 61.0634 10.38V9.38C61.0634 8.7 60.8968 8.07333 60.5634 7.5C60.2434 6.92667 59.8034 6.47333 59.2434 6.14C58.6968 5.79333 58.0968 5.62 57.4434 5.62C56.7368 5.62 56.1101 5.8 55.5634 6.16C55.0168 6.52 54.5901 7.02667 54.2834 7.68C53.9768 8.32 53.8234 9.05333 53.8234 9.88Z" fill="#F5F0EC"/>
                    <path d="M70.2959 15.6C69.3093 15.6 68.3959 15.3933 67.5559 14.98C66.7159 14.5667 66.0426 13.9533 65.5359 13.14C65.0426 12.3267 64.7959 11.34 64.7959 10.18C64.7959 9.02 65.0293 7.98667 65.4959 7.08C65.9759 6.16 66.6293 5.44667 67.4559 4.94C68.2959 4.42 69.2493 4.16 70.3159 4.16C71.4093 4.16 72.3359 4.40667 73.0959 4.9C73.8559 5.39333 74.4293 6.09333 74.8159 7C75.2159 7.89333 75.4159 8.94 75.4159 10.14H65.6959V8.72H74.1959L73.5359 9.3C73.5359 8.59334 73.4093 7.96 73.1559 7.4C72.9026 6.82667 72.5293 6.38 72.0359 6.06C71.5559 5.74 70.9826 5.58 70.3159 5.58C69.5959 5.58 68.9626 5.76667 68.4159 6.14C67.8826 6.5 67.4626 7.02667 67.1559 7.72C66.8493 8.4 66.6959 9.19333 66.6959 10.1C66.6959 11.02 66.8626 11.7867 67.1959 12.4C67.5293 13.0133 67.9693 13.4667 68.5159 13.76C69.0626 14.04 69.6626 14.18 70.3159 14.18C71.2626 14.18 72.0493 13.9333 72.6759 13.44C73.3159 12.9467 73.7759 12.3267 74.0559 11.58L75.5759 12.64C74.9493 13.6 74.1893 14.3333 73.2959 14.84C72.4026 15.3467 71.4026 15.6 70.2959 15.6Z" fill="#F5F0EC"/>
                    <path d="M81.8277 15.6C80.6943 15.6 79.6343 15.3533 78.6477 14.86C77.6743 14.3533 76.8943 13.66 76.3077 12.78L77.6677 11.66C78.041 12.4733 78.601 13.1067 79.3477 13.56C80.1077 14.0133 80.9477 14.24 81.8677 14.24C82.3477 14.24 82.7743 14.1733 83.1477 14.04C83.521 13.8933 83.8143 13.6933 84.0277 13.44C84.241 13.1733 84.3477 12.86 84.3477 12.5C84.3477 12.1133 84.2077 11.7933 83.9277 11.54C83.6477 11.2733 83.301 11.0667 82.8877 10.92C82.4877 10.76 81.9277 10.5867 81.2077 10.4C80.3143 10.16 79.5877 9.93333 79.0277 9.72C78.481 9.49333 78.0077 9.17333 77.6077 8.76C77.221 8.34667 77.0277 7.8 77.0277 7.12C77.0277 6.54667 77.1943 6.03333 77.5277 5.58C77.861 5.12667 78.3343 4.78 78.9477 4.54C79.561 4.28667 80.2543 4.16 81.0277 4.16C82.001 4.16 82.901 4.32667 83.7277 4.66C84.5676 4.99333 85.3077 5.58667 85.9477 6.44L84.5877 7.56C84.2677 6.89333 83.781 6.38667 83.1277 6.04C82.4743 5.69333 81.7677 5.52 81.0077 5.52C80.3543 5.52 79.821 5.65333 79.4077 5.92C79.0077 6.17333 78.8077 6.51333 78.8077 6.94C78.8077 7.28667 78.9343 7.57333 79.1877 7.8C79.4543 8.02667 79.781 8.21333 80.1677 8.36C80.5543 8.49333 81.081 8.64667 81.7477 8.82C82.681 9.07333 83.4343 9.31333 84.0077 9.54C84.5943 9.76667 85.0943 10.1067 85.5077 10.56C85.9343 11 86.1477 11.5867 86.1477 12.32C86.1477 12.9867 85.9543 13.5733 85.5677 14.08C85.181 14.5733 84.661 14.9533 84.0077 15.22C83.3677 15.4733 82.641 15.6 81.8277 15.6Z" fill="#F5F0EC"/>
                    <path d="M87.8359 4.44H89.6559V12.72C89.6559 13.68 89.6893 14.5467 89.7559 15.32H87.8359V4.44ZM87.7159 0.86H89.7759V2.8H87.7159V0.86Z" fill="#F5F0EC"/>
                    <path d="M95.2933 19.5C94.1733 19.5 93.2133 19.2733 92.4133 18.82C91.6133 18.3667 91.2133 17.7 91.2133 16.82C91.2133 16.3267 91.3866 15.8867 91.7333 15.5C92.0799 15.1133 92.5466 14.7867 93.1333 14.52C93.7199 14.24 94.4199 14 95.2333 13.8C95.3933 13.76 95.5333 13.7267 95.6533 13.7L95.8933 14.02C95.2799 14.22 94.7666 14.4333 94.3533 14.66C93.9399 14.8733 93.6133 15.1267 93.3733 15.42C93.1333 15.7133 93.0133 16.06 93.0133 16.46C93.0133 17.02 93.2599 17.4333 93.7533 17.7C94.2599 17.9667 94.8866 18.1 95.6333 18.1C96.4333 18.1 97.2133 17.98 97.9733 17.74C98.7466 17.5 99.3733 17.16 99.8533 16.72C100.333 16.2933 100.573 15.8 100.573 15.24C100.573 14.8533 100.44 14.5533 100.173 14.34C99.9066 14.1133 99.52 14 99.0133 14C98.6933 14 98.3466 14.04 97.9733 14.12C97.6133 14.1867 97.1199 14.3 96.4933 14.46C95.9733 14.6067 95.5399 14.72 95.1933 14.8C94.8466 14.8667 94.5399 14.9 94.2733 14.9C93.7933 14.9 93.3466 14.8333 92.9333 14.7C92.5333 14.5533 92.2066 14.3467 91.9533 14.08C91.7133 13.8 91.5933 13.4733 91.5933 13.1C91.5933 12.54 91.8733 12.0467 92.4333 11.62C92.9933 11.18 93.7466 10.8333 94.6933 10.58L95.0733 11.08C94.7933 11.16 94.56 11.2467 94.3733 11.34C93.9733 11.5 93.6799 11.6867 93.4933 11.9C93.3066 12.1 93.2133 12.32 93.2133 12.56C93.2133 12.8267 93.3333 13.0133 93.5733 13.12C93.8133 13.2267 94.1266 13.28 94.5133 13.28C94.8466 13.28 95.1933 13.2467 95.5533 13.18C95.9133 13.1 96.3266 13 96.7933 12.88C97.3533 12.7333 97.8333 12.6267 98.2333 12.56C98.6466 12.48 99.0733 12.44 99.5133 12.44C100.42 12.44 101.147 12.6533 101.693 13.08C102.24 13.5067 102.513 14.1267 102.513 14.94C102.513 15.86 102.153 16.6667 101.433 17.36C100.727 18.0533 99.8133 18.58 98.6933 18.94C97.5866 19.3133 96.4533 19.5 95.2933 19.5ZM96.3733 11.68C95.52 11.68 94.7666 11.52 94.1133 11.2C93.4599 10.8667 92.9466 10.4133 92.5733 9.84C92.2133 9.26667 92.0333 8.62667 92.0333 7.92C92.0333 7.21334 92.2133 6.57333 92.5733 6C92.9466 5.42667 93.4599 4.98 94.1133 4.66C94.7799 4.32667 95.5333 4.16 96.3733 4.16C96.9466 4.16 97.4199 4.22 97.7933 4.34C98.1666 4.46 98.56 4.62 98.9733 4.82C99.2 4.94 99.3933 5.03333 99.5533 5.1C99.7133 5.15333 99.88 5.18 100.053 5.18C100.453 5.18 100.74 5.06 100.913 4.82C101.1 4.56667 101.193 4.24 101.193 3.84L102.713 4.36C102.7 4.89333 102.493 5.3 102.093 5.58C101.693 5.86 101.227 6 100.693 6C100.56 6 100.38 5.98667 100.153 5.96C100.54 6.52 100.733 7.17333 100.733 7.92C100.733 8.62667 100.553 9.26667 100.193 9.84C99.8333 10.4133 99.3199 10.8667 98.6533 11.2C97.9866 11.52 97.2266 11.68 96.3733 11.68ZM96.3733 10.46C96.8933 10.46 97.3399 10.3533 97.7133 10.14C98.0866 9.91333 98.3733 9.60667 98.5733 9.22C98.7733 8.82 98.8733 8.38667 98.8733 7.92C98.8733 7.2 98.6466 6.6 98.1933 6.12C97.7533 5.62667 97.1466 5.38 96.3733 5.38C95.8666 5.38 95.4199 5.49333 95.0333 5.72C94.6599 5.94667 94.3733 6.25333 94.1733 6.64C93.9866 7.01333 93.8933 7.44 93.8933 7.92C93.8933 8.65333 94.1133 9.26 94.5533 9.74C95.0066 10.22 95.6133 10.46 96.3733 10.46Z" fill="#F5F0EC"/>
                    <path d="M104.008 4.44H105.828V7.6C106.094 6.92 106.474 6.32 106.968 5.8C107.461 5.28 108.021 4.88 108.648 4.6C109.274 4.30667 109.914 4.16 110.568 4.16C111.381 4.16 112.061 4.32 112.608 4.64C113.168 4.94667 113.581 5.37333 113.848 5.92C114.128 6.46667 114.268 7.1 114.268 7.82V12.72C114.268 13.68 114.301 14.5467 114.368 15.32H112.448V8.1C112.448 7.3 112.248 6.69333 111.848 6.28C111.461 5.86667 110.841 5.66 109.988 5.66C109.361 5.66 108.721 5.85333 108.068 6.24C107.428 6.62667 106.894 7.17333 106.468 7.88C106.041 8.57333 105.828 9.38 105.828 10.3V15.32H104.008V4.44Z" fill="#F5F0EC"/>
                </svg>
                <div class="flex items-center gap-[24px]">
                    ${sectionData.tagline}
                    <a href="" class="inline-block btn btn-green-dark">
                      Skontaktuj się z nami
                    </a>
                </div>
            </div>
        </div>
    `;
}
