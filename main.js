var images = ["family.jpeg","me.jpeg","mother.jpeg","father.jpeg","brother.jpeg"];
var names = ["My family","Nikhilesh","Subashini","Dhanraj","Gnaneshwar"];
var i=0;
function update(){
i++;
var family_members_in_array = 5;
if(i> family_members_in_array){
i=0;
}
var updatedimage = images[i];
var updatednames = names[i];
document.getElementById("family_member_image").src = updatedimage;
document.getElementById("family_member_name").innerHTML = updatednames;
}