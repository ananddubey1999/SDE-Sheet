// package Heap;
// here we find the kth smallest number in given array
import java.util.*;
public class kthsmallest {
    public static void main(String[] args) {
       int arr[] = {7,10,4,3,20,15};
       int k = 3;
    PriorityQueue<Integer> max = new PriorityQueue<>();
    for(int i= 0;i<arr.length;i++){
         max.add(arr[i]);   //adding the element in pq
    }
        int ans=0;
       for(int i=0;i<k;i++){     // traversing element upto k and store in ans 
          ans= max.poll();
        }
        System.out.print(ans);     // retrive the ans value
    }
}
