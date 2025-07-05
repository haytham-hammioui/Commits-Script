import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const makeCommits = (n) => {
	if (n === 0) return simpleGit().push();

	const x = random.int(0, 54); // weeks nb
	const y = random.int(0, 6);  // days nb
	const date = moment()
		.subtract(1, 'y')
		.add(1, "d")
		.add(x, "w")
		.add(y, "d")
		.format();

	const data = { date };

	console.log("Committing for date:", date);

	jsonfile.writeFile(path, data, () => {
		simpleGit()
			.add([path])
			.commit("commit", { '--date': date }, () => makeCommits(n - 1));
	});
};

makeCommits(10000);
