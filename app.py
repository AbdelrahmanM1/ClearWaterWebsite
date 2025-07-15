from flask import Flask, render_template, request, redirect, url_for
from markupsafe import escape
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get-involved', methods=['GET'])
def get_involved():
    return render_template('get_involved.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = escape(request.form.get('name', ''))
    suggestion = escape(request.form.get('suggestion', ''))
    with open("suggestions.txt", "a", encoding="utf-8") as f:
        f.write(f"{name}: {suggestion}\n")
    return redirect(url_for('thank_you', name=name))

@app.route('/thank-you')
def thank_you():
    name = escape(request.args.get('name', 'Friend'))
    return render_template('thank_you.html', name=name)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
