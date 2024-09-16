function firstNonRepeatedChar(str) {
 // Write your code here
	const arr = str.split("");
	for(let i=0;i<arr.length;i++)
		{
			let count =0;
			for(let j=0;j<arr.length;j++)
				{
					if(arr[i]===arr[j])
						
					{
						
						count++;
					}
				}
			if(count===1)
			{
				return arr[i];
			}
		}
	return null;	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
