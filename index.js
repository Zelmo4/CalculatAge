// ปัญหา:
// คุณได้รับอาร์เรย์ของอ็อบเจ็กต์ โดยที่แต่ละอ็อบเจ็กต์แทนบุคคลด้วยชื่อและอายุ
// เขียนโปรแกรม JavaScript ที่รับอาร์เรย์ของบุคคลและคำนวณอายุเฉลี่ยของกลุ่ม

// ตัวอย่างอาร์เรย์ของบุคคล:
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
  ];
  
  // งานของคุณคือทำฟังก์ชันต่อไปนี้:
  // totalAge / peopleArray.length;
  
  // ฟังก์ชันที่ 1: calculateAverageAge
  // พารามิเตอร์:
  //   - peopleArray: อาร์เรย์ของอ็อบเจ็กต์ แต่ละอ็อบเจ็กต์แทนบุคคล (เช่น อาร์เรย์ 'people')
  // ผลลัพธ์:
  //   - อายุเฉลี่ยของคนในอาร์เรย์
  
  function calculateAverageAge (peopleArray){
    let totalAge =0
    for (let A =0; A < peopleArray.length; A++){
      totalAge += peopleArray[A].age
      
    }

    return totalAge / peopleArray.length
  } 
  function displayAverageAge(averageAge) {
console.log(averageAge)
  }
  
  // ฟังก์ชันที่ 2: displayAverageAge
  // พารามิเตอร์:
  //   - averageAge: อายุเฉลี่ยที่คำนวณโดยฟังก์ชัน calculateAverageAge
  // การกระทำ:
  //   - แสดงอายุเฉลี่ยในคอนโซลหรือบนหน้าเว็บ
  
  
  // ทดสอบฟังก์ชันของคุณด้วยอาร์เรย์ 'people' ที่ให้ไว้:
  const averageAge = calculateAverageAge(people);
  displayAverageAge(averageAge);
