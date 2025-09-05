  const stepsSpan = document.getElementById('totalSteps');
        const distanceSpan = document.getElementById('totalDistance');
        const caloriesSpan = document.getElementById('totalCalories');
        const feedback = document.getElementById('feedback');

        function loadData() {
            const steps = localStorage.getItem('steps') || 0;
            const distance = localStorage.getItem('distance') || 0;
            const calories = localStorage.getItem('calories') || 0;

            stepsSpan.textContent = steps;
            distanceSpan.textContent = distance;
            caloriesSpan.textContent = calories;
        }

        loadData();

        // حفظ البيانات
        document.getElementById('saveBtn').addEventListener('click', () => {
            const stepsInput = document.getElementById('stepsInput').value || 0;
            const distanceInput = document.getElementById('distanceInput').value || 0;
            const caloriesInput = document.getElementById('caloriesInput').value || 0;

            localStorage.setItem('steps', stepsInput);
            localStorage.setItem('distance', distanceInput);
            localStorage.setItem('calories', caloriesInput);

            stepsSpan.textContent = stepsInput;
            distanceSpan.textContent = distanceInput;
            caloriesSpan.textContent = caloriesInput;

            // اظهار رسالة تأكيد
            feedback.style.display = 'block';
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 1500);
        });

        // إعادة ضبط البيانات
        document.getElementById('resetBtn').addEventListener('click', () => {
            localStorage.setItem('steps', 0);
            localStorage.setItem('distance', 0);
            localStorage.setItem('calories', 0);

            loadData();

        });
