import java.util.Scanner;
import java.util.Random;
import java.lang.StringBuilder;
public class Arrays {

	public static void main(String[] args) {
//		int[] quinceNumeros = new int[15];
		Scanner scan = new Scanner(System.in);
//		
//		for(int i = 0; i<15; i++) {
//			quinceNumeros[i] = scan.nextInt();
//		}
//		
//        int aux = quinceNumeros[quinceNumeros.length - 1];
//        
//        for (int i = quinceNumeros.length - 1; i > 0; i--) {
//            quinceNumeros[i] = quinceNumeros[i - 1];
//        }
//        quinceNumeros[0] = aux;
//        
//		for(int i = 0; i<quinceNumeros.length; i++) {
//			System.out.print(quinceNumeros[i] + " ");
//		}
//		
//		//Ejercicio 3
//		
          Random random = new Random();
//        int[] randomNumbersArray = new int[20];
//        int[] odds = new int[20];
//        
//        int randomNumber;
//        int lastOddIndex = 0;
//        int lastEvenIndex = 0;
//        
//        for (int i = 0; i < 20; i++) {
//        	randomNumber = random.nextInt(101);
//        	System.out.print(randomNumber + " ");
//        	if(randomNumber % 2 == 0) {
//        		randomNumbersArray[lastEvenIndex] = randomNumber;
//        		lastEvenIndex++;
//        	} else {
//        		odds[lastOddIndex] = randomNumber;
//        		lastOddIndex++;
//        	}
//        }
//        
//        int oddsIndex = 0;
//        for(int i = lastEvenIndex; i<20; i++) {
//        	randomNumbersArray[i] = odds[oddsIndex];
//        	oddsIndex++;
//        }
//        
//        System.out.print("\n");
//        for (int number : randomNumbersArray) {
//            System.out.print(number + " ");
//        }
		
		//Ejercicio 4
		
//		int[][] mat3x3 = new int[3][3];
//		int[] randomNumbers = new int [9];
//		int randomNumber;
//		
//		for(int i = 0; i<9; i++) {
//			randomNumber = random.nextInt(101);
//			for(int j = 0; j<i; j++) {
//				if (randomNumber == randomNumbers[j]) {
//					randomNumber = random.nextInt(101);
//					j=0;
//				}
//			}
//			randomNumbers[i] = randomNumber;
//		}
//		
//		int randomNumbersIndex = 0;
//		
//		for(int i = 0; i<3; i++) {
//			for(int j = 0; j<3; j++) {
//				mat3x3[i][j] = randomNumbers[randomNumbersIndex];
//				randomNumbersIndex++;
//				System.out.print(mat3x3[i][j] + " ");
//			}
//			System.out.println("\n");
//		}
//		
////		Ejercicio 5
//		
//          System.out.println("Elija 1 para sumar una fila y 2 para una columna");
//          int option = scan.nextInt();
//          switch(option) {
//          case 1: sumRow(mat3x3);
//          break;
//          case 2: sumCol(mat3x3);
//          break;
//          }
          
//       Ejercicio 6
//         int option;
//         StringBuilder matBuilded = new StringBuilder();
//         int [][] mat4x4 = new int[4][4];
//         boolean flagEmpty = false;
//         boolean flag = false;
//         while(flag == false) {
//        	 if(flagEmpty == false) {
//        		 System.out.println("Rellene la matriz");
//        		 for(int i = 0; i<4; i++) {
//        			 for(int j = 0; j<4; j++) {
//        				 mat4x4[i][j] = scan.nextInt();
//        				 matBuilded.append(mat4x4[i][j] + " ");
//        			 }
//        			 matBuilded.append("\n");
//        		 }
//        		 System.out.println(matBuilded);
//        		 flagEmpty = true;
//        	 } else {
//        		 System.out.println("1. Volver a rellenar la matriz");
//                 System.out.println("2. Sumar elementos de una fila");
//                 System.out.println("3. Sumar elementos de una columna");
//                 System.out.println("4. Sumar elementos de la diagonal principal");
//                 System.out.println("5. Sumar elementos de la diagonal inversa");
//        		   System.out.println("6. Conocer la media");
//                 System.out.println("7. Salir.");
//                 System.out.print("Ingrese una opcion: ");
//        		option = scan.nextInt();
//        		switch (option) {
//        		case 1: flagEmpty = false;
//        		break;
//        		case 2: sumRow4x4(mat4x4, scan);
//        		break;
//        		case 3: sumCol4x4(mat4x4, scan);
//        		break;
//        		case 4: sumDiag(mat4x4);
//        		break;
//        		case 5: sumRevDiag(mat4x4);
//        		break;
//          	case 6: average(mat4x4);
//          	break;
//        		case 7: flag = true;
//        		break;
//        		default:
//        			System.out.println("No entiendo");
//        		}
//        	 }
//         }
          
//          Ejercicio 7
//          int[][] population = new int[10][3]; //[n][0] genero, [n][1] trabaja?, [n][2] sueldo 
//          float res;
//          
//          fillPopulation(population);
//
//          showPopulation(population);
//          
//          res = averagePopulation(population, 1);
//          System.out.println("Porcentaje de hombres: " + res);
//          res = averagePopulation(population, 2);
//          System.out.println("Porcentaje de mujeres: " + res);
//          res = averagePopulationWhoWorks(population, 1);
//          System.out.println("Porcentaje de hombres que trabajan: " + res);
//          res = averagePopulationWhoWorks(population, 2);
//          System.out.println("Porcentaje de mujeres que trabajan: " + res);
//          res = averageSalaries(population, 1);
//          System.out.println("Promedio de salarios de los hombres: " + res);
//          res = averageSalaries(population, 2);
//          System.out.println("Promedio de salarios de las mujeres: " + res);
          
//          Ejercicio 8
          
	}
	
    private static void fillPopulation(int[][] population) {
        Random random = new Random();

        for (int i = 0; i < population.length; i++) {
            population[i][0] = random.nextInt(2) + 1;

            population[i][1] = random.nextInt(2) + 1;

            population[i][2] = random.nextInt(1401) + 600;
        }
    }

    private static void showPopulation(int[][] population) {
        System.out.println("Matriz Population:");

        for (int i = 0; i < population.length; i++) {
            System.out.println("Persona " + (i + 1) + ": Género=" + population[i][0] +
                    ", Trabaja=" + population[i][1] + ", Sueldo=" + population[i][2]);
        }
    }
	
    private static float averagePopulation(int[][] population, int gender) {
        int count = 0;
        for (int i = 0; i < 10; i++) {
            if (population[i][0] == gender) {
                count++;
            }
        }
        return (float) count / 10 * 100;
    }

    private static float averagePopulationWhoWorks(int[][] population, int gender) {
        int count = 0;
        for (int i = 0; i < 10; i++) {
            if (population[i][0] == gender && population[i][1] == 1) {
                count++;
            }
        }
        return count > 0 ? (float) count / 10 * 100: 0;
    }
	
	private static float averageSalaries(int[][] population, int gender) {
		int dividend = 0;
		for(int i = 0; i<10; i++) {
			if(population[i][0] == gender && population[i][1] == 1) {
				dividend+= population[i][2];
			}
		}
		return dividend/10;
	}
	
	private static void average(int arr[][]) {
		float acc = 0;
		for(int i = 0; i<arr[0].length; i++) {
			for(int j = 0; j<arr[0].length; j++) {
				acc += (float) arr[i][j];
			}
		}
		acc/=16;
		System.out.println("La media es: " + acc);
	}
	
	private static void sumDiag(int arr[][]) {
		int res = 0;
		for(int i = 0; i<arr[0].length; i++) {
			res += arr[i][i];
		}
		System.out.println("La suma de la diagonal principal da como resultado: " + res);
	}
	
	private static void sumRevDiag(int arr[][]) {
		int res = 0;
		for(int i = arr[0].length-1; i>=0; i--) {
			res += arr[i][i];
		}
		System.out.println("La suma de la diagonal inversa da como resultado: " + res);
	}
	
	private static void sumRow4x4(int arr[][], Scanner scan) {
		int option = scan.nextInt();
		while(option < 1 || option >4) {
			System.out.println("La fila no existe: ");
			option = scan.nextInt();
		}
		int res = 0;
		for(int i = 0; i<arr[0].length; i++) {
			res += arr[option-1][i];
		}
		System.out.println("La suma de la fila " + option + " da como resultado: " + res);
	}
	
	private static void sumCol4x4(int arr[][], Scanner scan) {
		int option = scan.nextInt();
		while(option <= 1 || option >=4) {
			System.out.println("La fila no existe: ");
			option = scan.nextInt();
		}
		int res = 0;
		for(int i = 0; i<arr[0].length; i++) {
			res += arr[i][option-1];
		}
		System.out.println("La suma de la columna " + option + " da como resultado: " + res);
	}

	
	private static void sumRow(int arr[][]) {
		Random random = new Random();
		int triCoin = random .nextInt(3);
		int res=0;
		for(int i = 0; i < 3; i++) {
			res += arr[triCoin][i];
		}
		System.out.println("El resultado de la suma de la fila " + triCoin+1 + " es: " + res);
	}
	
	private static void sumCol(int arr[][]) {
		Random random = new Random();
		int triCoin = random .nextInt(3);
		int res=0;
		for(int i = 0; i < 3; i++) {
			res += arr[i][triCoin];
		}
		System.out.println("El resultado de la suma de la columna " + triCoin+1 + " es: " + res);
	}
}
