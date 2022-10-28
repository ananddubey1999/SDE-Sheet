import java.util.*;
class LL{
    Node head;
    class Node{
        String data;
        Node next;
        Node(String data){
            this.data=data;
            this.next=null;
        }
    }
    // AddFirst
    public void addFirst(String data){
        Node newNode = new Node(data);
        if(head==null){
            head= newNode;
            return;
        }
        newNode.next=head;
        head= newNode;
    }
    // addLast
    public void addLast(String data){
        Node newNode = new Node(data);
        if(head==null){
            head= newNode;
            return;
        }
        Node current = head;
        while(current.next!=null){
            current = current.next;
        }
        current.next=newNode;
    }
    // printList
    public void printList(){
        if(head ==null){
         System.out.println("Empety list");
        }
        Node current = head;
        while(current!=null){
            System.out.print(current.data+"-->");
            current = current.next;
        }
        System.out.print("Null");
    }
    public static void main(String []args){
        LL list = new LL();
        list.addFirst("a");
        list.addFirst("is");
        list.addFirst("this");
        list.addLast("listnode");
        list.printList();
    }

}