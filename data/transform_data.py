import pandas as pd
import numpy as np

# Full dataset downloaded from:
# http://biostat.mc.vanderbilt.edu/wiki/pub/Main/DataSets/titanic3.csv
# It includes more passanger and avoid the problem of the original CSV
# from audacity, that more than 500 people have no age registered.

input = "../data/titanic_data.csv"
output = "../data/titanic_transformed_data.csv"
delete_columns = ["sibsp","parch","ticket","fare","cabin","embarked",
                "boat","body","home.dest"]

df = pd.read_csv(input)

# Delete columns we are not going to use
for column in delete_columns:
    df.drop(column, axis=1, inplace=True)

# Add an extra count column used to graph in dimple.js as a workaround
# because I cannot make it to use "count" as default aggregator.
df["Count"]=1

# Capitalize "female" and "male".
df.loc[df['Sex'] == "female", 'Sex'] = "Female"
df.loc[df['Sex'] == "male", 'Sex'] = "Male"

# Group the age in 10 years buckets
def group_age(value):
    if value <= 10:
        return "0-10"
    elif value <= 20:
        return "10-20"
    elif value <= 30:
        return "20-30"
    elif value <= 40:
        return "30-40"
    elif value <= 50:
        return "40-50"
    elif value <= 60:
        return "50-60"
    elif value <= 70:
        return "60-70"
    elif value <= 80:
        return "70-80"
    elif value <= 90:
        return "80-90"
    else:
        return "No data"

df["Age"] = df["Age"].apply(group_age)

# Change class from numbers to strings
df.loc[df['Pclass'] == 1, 'Pclass'] = "1st Class"
df.loc[df['Pclass'] == 2, 'Pclass'] = "2nd Class"
df.loc[df['Pclass'] == 3, 'Pclass'] = "3rd Class"

# Write the formatted .csv
df.to_csv(output)
