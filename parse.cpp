#include<iostream>
#include<fstream>
#include<string>

using namespace std;

int main(){
	ifstream fileS;
	cout<<"which book to parse: \n";
	string book;
	cin>>book;
	fileS.open(book);
	while(!fileS.eof()){
	
	}
	return 0;
}
