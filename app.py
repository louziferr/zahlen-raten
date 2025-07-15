from flask import Flask, render_template

# App erstellen
app = Flask(__name__)

# Route definieren
@app.route('/')
def index():
    return render_template('index.html')

# App starten
app.run(debug=True)