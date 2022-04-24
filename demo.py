import pandas as pd

# Creating a dictionary to store data
data = {'Name':['Tony', 'Steve', 'Bruce', 'Peter' ] ,
		'Age': [35, 70, 45, 20] }

# Creating DataFrame
df = pd.DataFrame(data)

# Converting DataFrame to a list containing
# all the rows of column 'Name'
names = []
names.append(df['Name'].tolist())
names.append(df['Age'].tolist())

# Printing the converted list.
print(names)
