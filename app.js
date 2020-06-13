var app = new Vue({
  el: '#app',
  data: {
  	totalParts: 0,
  	totalLabor: 0,
  	total: 0,
    tableEntries: [
    	{
    		quanity: 0,
    		partNumber: '',
    		description: '',
    		listPrice: 0,
    		priceEach: 0,
    		total: 0
    	}
    ]
  },
  created: function() {
  	console.log(this.tableEntries);
  },
  methods: {
  	addItem(){
  		this.tableEntries.push({
    		quanity: 0,
    		partNumber: '',
    		description: '',
    		listPrice: 0,
    		priceEach: 0,
    		total: 0
    	});
  	}

  },
  watch: {
  	tableEntries: {
  		deep: true,
  		handler() {
  			this.totalParts = 0;
  			this.tableEntries.forEach(entry => {
  				entry.total = (parseInt(entry.quanity) * parseFloat(entry.priceEach)).toFixed(2);
  				this.totalParts += parseFloat(entry.total);
  			});
  			this.totalParts = this.totalParts.toFixed(2);

  			this.total = (parseFloat(this.totalParts) + parseFloat(this.totalLabor)).toFixed(2);
  		}
  	},
  	totalLabor() {
  		this.total = (parseFloat(this.totalParts) + parseFloat(this.totalLabor)).toFixed(2);
  	}
  }
})